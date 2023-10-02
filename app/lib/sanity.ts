import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "0n0x3tyl";
const dataset = "production";
const apiVersion = "2021-10-21";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlfor = (source: any) => builder.image(source);

export default client;
