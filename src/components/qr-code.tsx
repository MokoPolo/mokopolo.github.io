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
      <h1 className="font-bold text-center my-4 leading-6 text-[22px]">
        Improve your front-end skills by building projects
      </h1>
      <p
        className="text-center leading-5 text-[15px]"
        style={{ color: "hsl(220, 15%, 55%)" }}
      >
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level.
      </p>
    </div>
  );
};

export default qrCode;
