export function addLandaSize(img, width = 0, height = 0) {
  let result = img;
  let found = false;

  const splt = img.split(".");
  const ext = splt[splt.length - 1];

  if (width > 0) {
    result += `/w${width}`;
    found = true;
  }
  if (height > 0) {
    const sep = width > 0 ? "-" : "/";
    result += `${sep}h${height}`;
    found = true;
  }
  result += found ? "-noEnlarge" : "/noEnlarge";

  return `${result}.${ext}`.replace(
    "https://s3.eu-west-1.amazonaws.com/tamtam",
    "https://s3.tamtam.pro"
  );
}

function extractFirstLettre(arrayStr, length) {
  let result = "";
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i] != undefined) {
      result += arrayStr[i].substring(0, 1);
    }
  }
  return result.toUpperCase();
}

export const getUserNameForAvatar = (firstName = "", lastName = "") => {
  let fName = firstName.split(" ");
  if (fName.length >= 3) {
    return extractFirstLettre(fName, 3);
  } else {
    let lName = lastName.split(" ");
    return extractFirstLettre(fName.concat(lName), 3);
  }
};
