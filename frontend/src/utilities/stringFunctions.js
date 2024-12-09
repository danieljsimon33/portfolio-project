export function titleCase(str) {
  const containsSpace = str.includes(" ");

  if (!containsSpace) {
    return str;
  } else {
    let finishedString;
    const strArray = str.split(" ");

    for (let subStr of strArray) {
      let titleCaseSubStr = subStr.replace(
        (text) => text.charAt(0).toUpperCase() + text.subString(1).toLowerCase()
      );
      finishedString += titleCaseSubStr;
    }
    return finishedString;
  }
}
