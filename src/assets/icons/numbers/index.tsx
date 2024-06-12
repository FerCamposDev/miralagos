import { divIcon } from "leaflet";

type NumbersProps = {
  size?: number;
  color?: string;
};

const one = (props?: NumbersProps) => {
  const { size = 32, color = '#292929' } = props || {}

  const html = (`
    <svg width="${size}px" height="${size}px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_429_11095)">
      <path d="M12.5 17V7L10.5 9" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="12" cy="12" r="9" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_429_11095">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  `);

  return divIcon({ html, iconSize: [size, size], className: 'bg-transparent' });
};

const two = (props?: NumbersProps) => {
  const { size = 32, color = '#292929' } = props || {}

  const html = (`
    <svg fill="none" height="${size}px" viewBox="0 0 24 24" width="${size}px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip0_429_10992">
          <rect fill="white" height="24" width="24"/>
        </clipPath>
      </defs>
      <g clip-path="url(#clip0_429_10992)">
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
        <path d="M9.5 9.5C9.5 8.8602 9.74408 8.2204 10.2322 7.73224C11.2085 6.75593 12.7915 6.75593 13.7678 7.73224C14.7441 8.70856 14.7441 10.2915 13.7678 11.2678L9.93934 15.0962C9.65804 15.3775 9.5 15.759 9.5 16.1569L9.5 17H14.5" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
      </g>
    </svg>
  `);

  return divIcon({ html, iconSize: [size, size], className: 'bg-transparent' });
};

const three = (props?: NumbersProps) => {
  const { size = 32, color = '#292929' } = props || {}

  const html = (`
    <svg width="${size}px" height="${size}px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_429_10991)">
      <circle cx="12" cy="12" r="9" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 16.2361C10.5308 16.7111 11.2316 17 12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11L15 7H10" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_429_10991">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  `);

  return divIcon({ html, iconSize: [size, size], className: 'bg-transparent' });
};

const four = (props?: NumbersProps) => {
  const { size = 32, color = '#292929' } = props || {}

  const html = (`
    <svg fill="none" height="${size}px" viewBox="0 0 24 24" width="${size}px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip0_429_11136">
          <rect fill="white" height="24" width="24"/>
        </clipPath>
      </defs>
      <g clip-path="url(#clip0_429_11136)">
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
        <path d="M10.5 7L9.22841 11.4506C8.86337 12.7282 9.8227 14 11.1515 14H14.5M14.5 14V10M14.5 14V17" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
      </g>
    </svg>
  `);

  return divIcon({ html, iconSize: [size, size], className: 'bg-transparent' });
};

const five = (props?: NumbersProps) => {
  const { size = 32, color = '#292929' } = props || {}

  const html = (`
    <svg fill="none" height="${size}px" viewBox="0 0 24 24" width="${size}px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip0_429_10989">
          <rect fill="white" height="24" width="24"/>
        </clipPath>
      </defs>
      <g clip-path="url(#clip0_429_10989)">
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
        <path d="M9.5 16.2361C10.0308 16.7111 10.7316 17 11.5 17C13.1569 17 14.5 15.6569 14.5 14C14.5 12.3431 13.1569 11 11.5 11C10.7316 11 10.0308 11.2889 9.5 11.7639L10.5 7H14.5" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
      </g>
    </svg>
  `);

  return divIcon({ html, iconSize: [size, size], className: 'bg-transparent' });
};

const six = (props?: NumbersProps) => {
  const { size = 32, color = '#292929' } = props || {}

  const html = (`
    <svg fill="none" height="${size}px" viewBox="0 0 24 24" width="${size}px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip0_429_11025">
          <rect fill="white" height="24" width="24"/>
        </clipPath>
      </defs>
      <g clip-path="url(#clip0_429_11025)">
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
        <path d="M12.9999 7L9.47502 12.3793M15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14Z" stroke="${color}" stroke-linecap="round" stroke-width="2.5"/>
      </g>
    </svg>
  `);

  return divIcon({ html, iconSize: [size, size], className: 'bg-transparent' });
};

const seven = (props?: NumbersProps) => {
  const { size = 32, color = '#292929' } = props || {}

  const html = (`
    <svg fill="none" height="${size}px" viewBox="0 0 24 24" width="${size}px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip0_429_10988">
          <rect fill="white" height="24" width="24"/>
        </clipPath>
      </defs>
      <g clip-path="url(#clip0_429_10988)">
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
        <path d="M9 7H15L11 17" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
      </g>
    </svg>
  `);

  return divIcon({ html, iconSize: [size, size], className: 'bg-transparent' });
};

const eight = (props?: NumbersProps) => {
  const { size = 32, color = '#292929' } = props || {}

  const html = (`
    <svg fill="none" height="${size}px" viewBox="0 0 24 24" width="${size}px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip0_429_11024">
          <rect fill="white" height="24" width="24"/>
        </clipPath>
      </defs>
      <g clip-path="url(#clip0_429_11024)">
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
        <circle cx="12" cy="14" r="3" stroke="${color}" stroke-linejoin="round" stroke-width="2.5"/>
        <circle cx="12" cy="9" r="2" stroke="${color}" stroke-linejoin="round" stroke-width="2.5"/>
      </g>
    </svg>
  `);

  return divIcon({ html, iconSize: [size, size], className: 'bg-transparent' });
};

const nine = (props?: NumbersProps) => {
  const { size = 32, color = '#292929' } = props || {}

  const html = (`
    <svg fill="none" height="${size}px" viewBox="0 0 24 24" width="${size}px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip0_429_11082">
          <rect fill="white" height="24" width="24"/>
        </clipPath>
      </defs>
      <g clip-path="url(#clip0_429_11082)">
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
        <path d="M11.0001 17L14.525 11.6207M9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10Z" stroke="${color}" stroke-linecap="round" stroke-width="2.5"/>
      </g>
    </svg>
  `);

  return divIcon({ html, iconSize: [size, size], className: 'bg-transparent' });
};


export const numbers = {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine
}