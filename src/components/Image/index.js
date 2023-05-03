import classNames from 'classnames';
import { useState, forwardRef } from 'react';

import styles from './Image.module.scss';
import images from '~/assets/images';

function Image({ fallback: customFallback = images.noImage, src, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
            ref={ref}
        />
    );
}

export default forwardRef(Image);
