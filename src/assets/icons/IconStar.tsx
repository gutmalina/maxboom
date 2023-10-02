import React, { FC, useMemo } from 'react'
import { TProps } from '../../models/SvgModel'

/**
 * @param {Array<string> | string} styles - стилизация звезды
 *
 * @return {svg} - svg изображение
 */
const IconStar: FC<TProps> = props => {
  const { styles } = props
  const style = useMemo(() => {
    return Array.isArray(styles) ? styles.join(' ') : styles
  }, [styles])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none" className={style}>
      <g clipPath="url(#clip0_1_294)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.085 5.43294C15.037 5.29853 14.9508 5.18106 14.837 5.09494C14.7221 5.00772 14.5847 4.955 14.441 4.94294L10.179 4.33594L8.26898 0.552938C8.20713 0.428641 8.11146 0.324312 7.99298 0.251938C7.90379 0.197732 7.80441 0.162427 7.70101 0.148213C7.59761 0.133999 7.49239 0.141178 7.39188 0.169306C7.29137 0.197434 7.19771 0.245911 7.1167 0.311731C7.0357 0.377551 6.96908 0.45931 6.92098 0.551938L5.00998 4.32894L0.749982 4.94294C0.611958 4.96201 0.48186 5.01875 0.373982 5.10694C0.267504 5.19408 0.187782 5.3095 0.143982 5.43994C0.103692 5.56724 0.0998549 5.70328 0.132905 5.83265C0.165955 5.96203 0.234571 6.07956 0.330982 6.17194L3.42298 9.09994L2.67398 13.2559C2.64372 13.3938 2.65486 13.5374 2.70598 13.6689C2.75798 13.8009 2.84598 13.9149 2.96298 13.9989C3.07997 14.0829 3.21841 14.1319 3.36217 14.1402C3.50592 14.1485 3.64909 14.1158 3.77498 14.0459L7.59498 12.0929L11.415 14.0459C11.5203 14.104 11.6387 14.1343 11.759 14.1339C11.9085 14.1345 12.0548 14.091 12.1796 14.0088C12.3045 13.9266 12.4024 13.8094 12.461 13.6719C12.514 13.5424 12.5279 13.4003 12.501 13.2629L11.751 9.10694L14.845 6.18094C14.9533 6.09345 15.0337 5.97626 15.0763 5.84375C15.1189 5.71123 15.1219 5.56915 15.085 5.43494V5.43294ZM10.479 8.35994C10.3931 8.44149 10.3283 8.54276 10.2903 8.65497C10.2523 8.76718 10.2423 8.88696 10.261 9.00394L10.801 12.0769L7.98398 10.6139C7.8742 10.561 7.75388 10.5335 7.63198 10.5335C7.51009 10.5335 7.38976 10.561 7.27998 10.6139L4.46398 12.0769L5.00398 9.00394C5.02386 8.88694 5.01435 8.76683 4.9763 8.65441C4.93824 8.542 4.87285 8.44081 4.78598 8.35994L2.53998 6.16494L5.69398 5.71894C5.81413 5.70213 5.9285 5.65676 6.0275 5.58664C6.1265 5.51652 6.20725 5.4237 6.26298 5.31594L7.59598 2.52794L9.00398 5.32294C9.05798 5.43094 9.13798 5.52294 9.23698 5.59294C9.33698 5.66394 9.45198 5.70894 9.57298 5.72594L12.727 6.17194L10.479 8.35994Z"
          fill="#E6C622"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_294">
          <rect width="15" height="14" fill="white" transform="translate(0.109985 0.140137)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconStar