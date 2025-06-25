import { isAxiosError } from "axios";
import api from "./client";
import type { StrapiResponse, Wish } from "./types";
export async function getWishList(): Promise<StrapiResponse<Wish>> {
  const getPopulate = (index: number, name: string, item: string) =>
    `populate[${item}][fields][${index}]=${name}`;

  const thumbnailNImageFields = ["url", "name", "alternativeText", "caption"];
  const populateThumbnaliQuery = thumbnailNImageFields
    .map((field, index) => getPopulate(index, field, "thumbnali"))
    .join("&");
  const populateImageQuery = thumbnailNImageFields
    .map((field, index) => getPopulate(index, field, "images"))
    .join("&");
  try {
    const { data } = await api.get<StrapiResponse<Wish>>(
      `/api/wishes?${populateThumbnaliQuery}&${populateImageQuery}`
    );
    return data;
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Error fetching wish list",
        {
          cause: {
            status: 500,
            origin: "Query Wish List",
          },
        }
      );
    }
    throw new Error("Error fetching wish list", {
      cause: {
        status: 500,
        origin: "Query Wish List",
      },
    });
  }
}
