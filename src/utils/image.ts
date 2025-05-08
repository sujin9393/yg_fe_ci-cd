import { S3_BASE_URL } from "../constants";

export const getImageUrl = (key: string) => `${S3_BASE_URL}${key}`;
