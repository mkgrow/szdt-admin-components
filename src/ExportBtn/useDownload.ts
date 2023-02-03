import { useCallback, useState } from 'react';
import { message } from 'antd';
import request from 'umi-request';
import type { RequestOptionsInit } from 'umi-request';

export function save(blob: Blob, filename: string) {
  const objectUrl = window.URL.createObjectURL(blob);

  const anchor = window.document.createElement('a');
  anchor.setAttribute('download', filename);
  anchor.setAttribute('href', objectUrl);
  anchor.click();
  anchor.remove();

  window.URL.revokeObjectURL(objectUrl);
}

function getFilename(filename?: string, headers?: Headers): string {
  const disposition = headers?.get?.('content-disposition');
  if (!disposition) {
    return filename || 'download';
  }

  const remoteFilename = decodeURIComponent(disposition.replace('attachment;filename=', ''));

  const [, ext] = remoteFilename.match(/.*(\.\w+)$/) || [];

  return filename ? `${filename}${ext}` : remoteFilename || 'download';
}

export interface DownloadRequestOptions extends RequestOptionsInit {
  filename?: string;
  onDownload?: () => void;
  onError?: (e: Error) => void;
  onFinished?: () => void;
}

export default function useDownload(url: string, options?: DownloadRequestOptions) {
  const [loading, setLoading] = useState(false);

  const download = useCallback(() => {
    setLoading(true);

    const { filename, onDownload, onError, onFinished, ...rest } = options || {};
    request(url, {
      ...rest,
      getResponse: true,
      responseType: 'blob',
    })
      .then(({ data, response }) => {
        save(data, getFilename(filename, response.headers));

        if (onDownload) {
          onDownload?.();
        } else {
          message.success('下载成功！', 2000);
        }
      })
      .catch((e: Error) => {
        // eslint-disable-next-line no-console
        console.error(e);
        if (onError) {
          onError(e);
        } else {
          message.error('下载失败！');
        }
      })
      .finally(() => {
        setLoading(false);
        onFinished?.();
      });
  }, [options, url]);

  return { loading, download };
}
