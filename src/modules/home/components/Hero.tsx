import {
    Arrow,
    Arrows,
    Container,
    Content,
    Details,
    DotContainer,
    Dots,
    ImageContainer,
    StyledButton,
    Tools,
} from './Hero.styles';

import { ReactComponent as Dot } from '../../../assets/images/svg/ellipse1.svg';
import { ReactComponent as Left } from '../../../assets/images/svg/buttonSlideLeft.svg';
import { ReactComponent as Right } from '../../../assets/images/svg/buttonSlideRight.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Hero: React.FC<any> = ({ titles }) => {
    const [slide, setSlide] = useState<number>(0);

    const nextSlide = () => {
        if (slide < 2) setSlide(slide + 1);
        else setSlide(0);
    };
    const prevSlide = () => {
        if (slide > 0) setSlide(slide - 1);
        else setSlide(2);
    };

    console.log(slide);
    console.log(titles.list[slide]);

    if (titles.status === 'loaded')
        return (
            <ImageContainer
                image={titles.list[slide].trailer.images.maximum_image_url}
            >
                <Container>
                    <Content>
                        <h3>{titles.list[slide].title}</h3>
                        <div>
                            <Details>
                                {`${titles.list[slide].type} • ${
                                    titles.list[slide].duration
                                } 
                                ${
                                    titles.list[slide].type === 'TV'
                                        ? '/ep'
                                        : null
                                }`}
                            </Details>
                            <Tools>
                                <Link
                                    key={titles.list[slide].mal_id}
                                    to={`/animes/${titles.list[slide].mal_id}`}
                                >
                                    <StyledButton>Watch now</StyledButton>
                                </Link>
                                <Dots>
                                    <DotContainer>
                                        <Dot fill="#D24C00" />
                                    </DotContainer>
                                    <DotContainer>
                                        <Dot
                                            fill="#FFFFFF"
                                            width="8px"
                                            height="8px"
                                            opacity="50%"
                                        />
                                    </DotContainer>
                                    <DotContainer>
                                        <Dot
                                            fill="#FFFFFF"
                                            width="8px"
                                            height="8px"
                                            opacity="50%"
                                        />
                                    </DotContainer>
                                </Dots>
                                <Arrows>
                                    <Arrow onClick={prevSlide}>
                                        <Left />
                                    </Arrow>
                                    <Arrow onClick={nextSlide}>
                                        <Right />
                                    </Arrow>
                                </Arrows>
                            </Tools>
                        </div>
                    </Content>
                </Container>
            </ImageContainer>
        );
    if (titles.list[slide].status === 'idle') return <div />;
    if (titles.list[slide].status === 'loading') return <div>Loading</div>;
    if (titles.list[slide].status === 'error')
        return <div>Something went wrong</div>;
    else return null;
};
