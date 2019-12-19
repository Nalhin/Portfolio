import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from '../../../styles/styled';
import { useRouter } from 'next/router';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface StyledLink {
  isActive: boolean;
}

const StyledLink = styled(motion.li)<StyledLink>`
  cursor: pointer;
  list-style-type: none;
  &:after {
    content: '';
    display: block;
    width: 100%;
    margin-top: 3px;
    height: 3px;
    transition: transform 250ms ease;
    transform: ${props => (props.isActive ? 'scaleX(1)' : 'scaleX(0)')};
    background: ${props => props.theme.colors.primary};
  }

  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  href: string;
  onClick: () => void;
}

const MobileLink: React.FC<Props> = ({ href, children, onClick }) => {
  const router = useRouter();
  const { pathname } = router;
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <StyledLink variants={variants} onClick={onClick} isActive={isActive}>
        {children}
      </StyledLink>
    </Link>
  );
};

export default MobileLink;
