const qrCode = () => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4"
      style={{ width: "15.6rem" }}
    >
      <div>
        <img
          className="rounded-lg"
          src="./images/image-qr-code.png"
          alt="QR Code"
        />
      </div>
      <div
        className="font-bold text-center my-4 leading-6"
        style={{ fontSize: "22px" }}
      >
        Improve your front-end skills by building projects
      </div>
      <div
        className="text-center leading-5"
        style={{ color: "hsl(220, 15%, 55%)", fontSize: 15 }}
      >
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level.
      </div>
    </div>
  );
};

export default qrCode;
