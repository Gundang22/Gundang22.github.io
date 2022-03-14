import React, {useRef, useState, useEffect} from 'react';
import useStyles from './styles';

const FadeInSection = ({
    children,
}) => {
    const classes = useStyles();
    const domRef = useRef();
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                setVisible(true);
                observer.unobserve(domRef.current);
            }
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return(<section ref={domRef} className={isVisible ? classes.fadeIn : classes.nonVisible}>{ children }</section>)
};

export default FadeInSection;