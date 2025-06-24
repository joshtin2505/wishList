import api from "./client";
export const getWishList = async () => {
  const getPopulate = (index: number, name: string, item: string) =>
    `populate[${item}][fields][${index}]=${name}`;

  const thumbnailNImageFields = ["url", "name", "alternativeText", "caption"];
  const populateThumbnaliQuery = thumbnailNImageFields
    .map((field, index) => getPopulate(index, field, "thumbnail"))
    .join("&");
  const populateImageQuery = thumbnailNImageFields
    .map((field, index) => getPopulate(index, field, "images"))
    .join("&");
  const response = await api.get(
    `/api/wishes?${populateImageQuery}&${populateThumbnaliQuery}`
  );
  return response.data;
};
