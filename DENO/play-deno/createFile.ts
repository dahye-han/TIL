const encoder = new TextEncoder();

const helloText = encoder.encode('hell, thank you');

await Deno.writeFile("Hello.txt", helloText);

