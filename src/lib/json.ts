/**
 * Parses a JSON string and returns the parsed data as the specified type.
 *
 * @template T The expected type of the parsed data.
 * @param jsonString The JSON string to parse.
 * @returns The parsed data as the specified type, or null if the string is not valid JSON.
 * @throws Will log an error if the JSON string cannot be parsed.
 */
const parseJSONFromString = <T>(jsonString: string): T | null => {
  try {
    const parsedData: T = JSON.parse(jsonString);
    return parsedData;
  } catch (error) {
    console.error(
      "Unparseable JSON found:",
      jsonString,
      "resulting in error",
      error
    );
    return null;
  }
};

export default parseJSONFromString;
