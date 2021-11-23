import fetch from "cross-fetch";
import { parse } from "node-html-parser";
import jsdom from "jsdom";
import { JSDOM } from "jsdom";
const api_url = "http://ws-old.parlament.ch/councillors";
// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(api_url);
  const htmlResponse = await response.text();
  const dom = new JSDOM(htmlResponse);
  const datas = dom.window.document
    .querySelectorAll("table")[1]
    .textContent.toString()
    .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
    .split("Details")
    .map((each) => {
      return each
        .replace(/\s*,\s*/g, ",")
        .split(/(\d+)/)
        .filter((value) => value != " ");
    });
  const getJson = () => {
    let array = [];
    datas.forEach((data) => {
      const id = data[0];
      const number = data[1];
      const name = data[2];
      array.push({
        id: id,
        number: number,
        name: name,
      });
    });
    const jsonString = JSON.stringify(array);
    return jsonString;
  };

  const data = getJson();
  console.log(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
