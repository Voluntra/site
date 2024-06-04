function parseInput(arr: string[]): void {
  let buffer = "";

  for (let i = 0; i < arr.length; i++) {
    // Append the incoming data to the buffer
    buffer += arr[i].replace("data: ", "");

    // Split the buffer into separate JSON strings
    const jsonStrings = buffer.split("\n");

    for (const str of jsonStrings) {
      let leftBracket = str.indexOf("{");
      let rightBracket = str.lastIndexOf("}");

      // If the string contains a complete JSON object
      if (leftBracket !== -1 && rightBracket !== -1) {
        const jsonString = str.substring(leftBracket, rightBracket + 1);

        try {
          const parsedData = JSON.parse(jsonString);

          console.log("[SUCCESS] Parsing successful");
        } catch (e) {
          console.error(
            "Unparseable JSON found:",
            jsonString,
            "resulting in error",
            e
          );
        }
      }
    }

    // Clear the buffer
    buffer = "";
  }
}

const input = [
  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',
  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',
  'data: {"response":" such","p',
  '":"abcdefghijklmnopqrstuvwxyz0123456789abcdefghi"}',
  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',
  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',
  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',
  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',
  'data: {"response":" such","p',
  "",
  '":"abcdefghijklmnopqrstuvwxyz0123456789abcdefghi"}',
  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',
  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',
  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',

  `data: {"response":" sports","p":"abcdefghijklmnopqrstuvwx"}

data: {"response":" fans","p":"abcdef"}`,

  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',
  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',
  '{"response":" of","p":"abcdefghijklmnopqrstuvwxyz0123456789ab"}',
];

parseInput(input);
