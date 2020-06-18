export default function readingFile(
  e: React.ChangeEvent<HTMLInputElement>,
  onHandleImg: (newImg: File) => any,
) {
  const img = e.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    onHandleImg(img);
  };
  reader.readAsDataURL(img);
}
