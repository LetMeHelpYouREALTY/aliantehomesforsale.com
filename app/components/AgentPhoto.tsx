import Image from 'next/image';
import { siteConfig } from '../../lib/site-config';

type AgentPhotoProps = {
  /** Rendered width/height in pixels. */
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Official Dr. Jan Duffy portrait for brand, trust, and contact sections.
 * The source image is already a gold-ringed circle; rounded-full clips the square corners.
 */
export default function AgentPhoto({
  size = 160,
  className = '',
  priority = false,
}: AgentPhotoProps) {
  return (
    <Image
      src={siteConfig.agentImage}
      alt={`${siteConfig.agentName}, Aliante North Las Vegas real estate agent`}
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
      sizes={`${size}px`}
      priority={priority}
    />
  );
}
