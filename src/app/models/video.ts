interface Thumbnail {
  default: {
    height: number,
    url: string,
    width: number
  },
  high: {
    height: number,
    url: string,
    width: number
  },
  medium: {
    height: number,
    url: string,
    width: number
  }
}
export interface Video {
  etag: string,
  id: {
    kind: string,
    videoId: string,
  }
  kind: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    channelTitle: string,
    description: string,
    liveBroadcastContent: string,
    publishTime: string,
    thumbnails: Thumbnail[]
  }
}