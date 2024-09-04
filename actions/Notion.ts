"use server";

import { NotionAPI } from "notion-client";

export const getPage = async () => {
  console.log("\n\n\ngetPage\n\n\n");
  const notion = new NotionAPI();
  const recordMap = await notion.getPage("067dd719a912471ea9a3ac10710e7fdf");
  console.log("recordMap", recordMap);
  return recordMap;
};
