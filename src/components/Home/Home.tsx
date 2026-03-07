import {
  HomeContainer,
  HomeContent,
  HomeImage,
  HomeIntroduction,
  HomeName,
  HomeTitle,
  ImageWrapper,
} from "./Home.styled";

function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeIntroduction>Olá 👋,</HomeIntroduction>

        <HomeIntroduction>
          Meu nome é
          <HomeTitle>
            <HomeName>João Victor Olegário</HomeName>
          </HomeTitle>
        </HomeIntroduction>

        <HomeIntroduction>Sou desenvolvedor Full Stack Jr</HomeIntroduction>
      </HomeContent>

      <HomeImage>
        <ImageWrapper>
          <img src="/perfil.jpeg" alt="Perfil" />
        </ImageWrapper>
      </HomeImage>
    </HomeContainer>
  );
}

export default Home;
