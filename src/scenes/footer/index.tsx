import Logo from "@/assets/Logo.png";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nemo
            debitis asperiores voluptates, temporibus explicabo? Obcaecati
            molestiae repudiandae excepturi incidunt ea.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senceturs</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Tempus meus mattis risus volutpat egats.</p>
          <p>(+972)50-952-5201</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
