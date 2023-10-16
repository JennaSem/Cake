function About() {
  return (
    <div className="text-about">
      <div className="main-cont">
        <h1>
          Welcome to <span className="logo">Comic</span>
          <span className="color">Cake</span>
        </h1>
      </div>
      <div className="story storyOne">
        <figure className="about-image">
          <img src="images/pastry_teamle.png" width="150px" alt="pastry team" />
        </figure>
        <p>
          Our enchanting bakery where culinary art meets the world of fantasy.
          We are a team of passionate bakers and artists, united by our love for
          crafting incredible desserts and unique cakes.
        </p>
      </div>

      <div className="story storyTwo">
        <h3 className="history">Our History</h3>
        <p>
          Our journey began in 1987 when our founder, Jenna, decided to infuse a
          touch of magic and fantasy into the world of baking. We started as a
          small bakery and have since become a source of delight and inspiration
          for many food enthusiasts.
        </p>
      </div>

      <div className="story storyThree">
        <h3 className="recipe">Our Unique Recipes</h3>
        <p>
          At ComicCake, we offer more than just sweets. Our bakers are true
          masters of their craft, creating desserts that transport you to the
          captivating realms of comics and fantasy. We take pride in our unique
          recipes that combine incredible taste with extraordinary design.
        </p>
      </div>
    </div>
  );
}
export default About;
