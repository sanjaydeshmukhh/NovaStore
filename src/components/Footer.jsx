
const Footer = () => {
  return (
    <footer className="md:px-8 px-4 py-6 text-white bg-gray-900">
      <div className="md:flex-row container flex flex-col items-center justify-between mx-auto">

        <div className="md:mb-0 mb-4">
          <h1 className="text-2xl font-semibold">NovaStore</h1>
        </div>


        <div className="md:mb-0 md:text-right mb-4 text-center">
          <p className="mb-2">Pune, India</p>
          <p className="mb-2">Email: contactus@NovaStore.com</p>
          <p>Phone: (+91) 999-7890-456</p>
        </div>
      </div>


      <div className="pt-4 mt-4 text-center border-t border-gray-700">
        <p>&copy; 2024 NovaStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
