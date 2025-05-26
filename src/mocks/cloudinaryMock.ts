export const cloudinary = {
  uploader: {
    upload_stream: (options: any, callback: Function) => {
      console.log("Mock: upload para Cloudinary");
      callback(null, { url: "https://fake.cloudinary.com/fakeimage.png" });
    },
  },
};
