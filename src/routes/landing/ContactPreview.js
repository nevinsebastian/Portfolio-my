import ContactForm from "../contact/ContactForm";

const ContactPreview = () => {
  return (
    <article className="contact">
      <h2 className="title-font pink-text h2-tag">Contact Me</h2>
      <p className="white-text p-tag">
      Feel free to connect with me if you want to discuss new and interesting tech. I'm always open to engaging in conversations about the latest developments in the world of web and app development. If you have any other requests or questions related to web development, don't hesitate to reach out.
      </p>
      <ContactForm />
    </article>
  );
};

export default ContactPreview;
