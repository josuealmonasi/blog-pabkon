export interface IAuthor {
  metadata: IMetadata;
  sys: IImageSys;
  fields: IAuthorFields;
}

export interface IAuthorFields {
  name: string;
  image: IFieldsImage;
  shortBio: string;
}

export interface IFieldsImage {
  metadata: IMetadata;
  sys: IImageSys;
  fields: IImageFields;
}

export interface IImageFields {
  title: string;
  description: string;
  file: File;
}

export interface IFile {
  url: string;
  details: IDetails;
  fileName: string;
  contentType: string;
}

export interface IDetails {
  size: number;
  image: IDetailsImage;
}

export interface IDetailsImage {
  width: number;
  height: number;
}

export interface IMetadata {
  tags: any[];
}

export interface IImageSys {
  space: IContentType;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: IContentType;
  revision: number;
  locale: string;
  contentType?: IContentType;
}

export interface IContentType {
  sys: IContentTypeSys;
}

export interface IContentTypeSys {
  id: string;
  type: string;
  linkType: string;
}
