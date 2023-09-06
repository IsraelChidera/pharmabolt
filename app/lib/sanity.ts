import { createClient } from "next-sanity";

const projectId = "0n0x3tyl";
const dataset = "production";
const apiVersion = "2021-10-21";

const client =  createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export default client