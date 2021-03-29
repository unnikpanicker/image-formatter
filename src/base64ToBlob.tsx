import { Base64 } from "js-base64";
export default (b64Data: string, contentType: string, sliceSize: number) => {
  contentType = contentType || "";
  sliceSize = sliceSize || 512;
  var byteCharacters = Base64.atob(b64Data);
  var byteArrays = [];
  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);
    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  var blob = new Blob(byteArrays, { type: contentType });
  return blob;
};
