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
import { FetchTitles, TitleObject } from '../../../types/titleTypes';

type Ititles = { titles: Pick<FetchTitles, 'list' | 'status'> };

export const Hero: React.FC<Ititles> = ({ titles }) => {
    const [slide, setSlide] = useState<number>(0);
    const count = 3;

    const dotsMap = () => {
        const dots = [];
        for (let i = 0; i < count; i++) {
            dots.push(
                <DotContainer onClick={() => setSlide(i)} key={i}>
                    <Dot
                        {...(slide === i
                            ? { style: { fill: '#D24C00' } }
                            : {
                                  style: {
                                      fill: '#FFFFFF',
                                      opacity: '50%',
                                      width: '8px',
                                      height: '8px',
                                  },
                              })}
                    />
                </DotContainer>
            );
        }
        return dots;
    };
    const dots = dotsMap();

    const nextSlide = () => {
        if (slide < 2) setSlide(slide + 1);
        else setSlide(0);
    };
    const prevSlide = () => {
        if (slide > 0) setSlide(slide - 1);
        else setSlide(2);
    };

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
                                <Dots>{dots.map((item) => item)}</Dots>
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
