const qrCode = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full w-full">
      <div
        className="bg-white rounded-lg shadow-md p-4"
        style={{ width: "400px", height: "600px" }}
      >
        <div>
          <img
            className="rounded-lg"
            src="./images/image-qr-code.png"
            alt="QR Code"
          />
        </div>
        <div className="font-bold text-lg mt-4">
          Improve your front-end skills by building projects
        </div>
        <div>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level.
        </div>
      </div>
    </div>
  );
};

export default qrCode;
