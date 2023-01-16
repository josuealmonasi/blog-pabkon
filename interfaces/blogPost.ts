export interface BlogPost {
  slug: string;
  image: MetaImageClass;
  title: string;
  hashtag: string[];
  author: Author;
  publishDate: string;
  description: string;
  body: string;
  metaData: string;
  metaImage: MetaImageClass;
}

export interface Author {
  metadata: Metadata;
  sys: ImageSys;
  fields: AuthorFields;
}

export interface AuthorFields {
  name: string;
  image: MetaImageClass;
  shortBio: string;
  email: string;
  twitter: string;
}

export interface MetaImageClass {
  metadata: Metadata;
  sys: ImageSys;
  fields: ImageFields;
}

export interface ImageFields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: DetailsImage;
}

export interface DetailsImage {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface ImageSys {
  space: ContentType;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  revision: number;
  locale: string;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id: string;
  type: string;
  linkType: string;
}
