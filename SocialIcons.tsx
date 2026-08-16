import React from 'react';

export interface SocialPlatform {
  id: string;
  name: string;
  url: string;
  handle?: string;
  color: string;
  bgHover: string;
  borderColor: string;
  badgeColor: string;
  description: string;
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com',
    handle: '@akboosting',
    color: '#1877F2',
    bgHover: 'hover:bg-[#1877F2]/15',
    borderColor: 'border-[#1877F2]/30',
    badgeColor: 'bg-[#1877F2]/20 text-[#60A5FA]',
    description: 'Followers, post boosts & page growth'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com',
    handle: '@akboostingweb',
    color: '#FF0000',
    bgHover: 'hover:bg-[#FF0000]/15',
    borderColor: 'border-[#FF0000]/30',
    badgeColor: 'bg-[#FF0000]/20 text-[#F87171]',
    description: 'Subscribers, watch time & video views'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com',
    handle: '@akboosting',
    color: '#E4405F',
    bgHover: 'hover:bg-[#E4405F]/15',
    borderColor: 'border-[#E4405F]/30',
    badgeColor: 'bg-[#E4405F]/20 text-[#F472B6]',
    description: 'Followers, reels reach & engagement'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://tiktok.com',
    handle: '@akboosting',
    color: '#00F2FE',
    bgHover: 'hover:bg-[#00F2FE]/15',
    borderColor: 'border-[#00F2FE]/30',
    badgeColor: 'bg-[#00F2FE]/20 text-[#38BDF8]',
    description: 'Viral video boost & follower growth'
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    url: 'https://snapchat.com',
    handle: '@akboosting',
    color: '#FFFC00',
    bgHover: 'hover:bg-[#FFFC00]/15',
    borderColor: 'border-[#FFFC00]/30',
    badgeColor: 'bg-[#FFFC00]/20 text-[#FACC15]',
    description: 'Spotlight reach, adds & story boost'
  }
];

export const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const YouTubeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.043.87.127V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 10.79 4.46 6.27 6.27 0 0 0 1.88-4.48V8.75a8.28 8.28 0 0 0 4.84 1.56v-3.5a4.84 4.84 0 0 1-1.06-.12z" />
  </svg>
);

export const SnapchatIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.979c-3.136 0-5.32 2.215-5.32 5.434 0 .903.228 1.956.559 2.659.135.289.043.43-.19.526-.642.264-1.637.76-1.637 1.554 0 .548.498.922 1.096 1.04.384.075.698.058.948.337.294.329.176.99.112 1.348-.12.673-.559 1.15-1.579 1.32-.423.07-.63.298-.63.535 0 .428.533.72 1.488.892.483.087 1.026.069 1.517.382.49.313.435.83.398 1.187-.04.39-.126.83.25.992.378.163.784-.11 1.258-.465.733-.55 1.587-.714 2.49-.714.901 0 1.755.164 2.488.714.474.355.88.628 1.258.465.376-.162.29-.602.25-.992-.037-.357-.092-.874.398-1.187.491-.313 1.034-.295 1.517-.382.955-.172 1.488-.464 1.488-.892 0-.237-.207-.465-.63-.535-1.02-.17-1.459-.647-1.579-1.32-.064-.358-.182-1.019.112-1.348.25-.279.564-.262.948-.337.598-.118 1.096-.492 1.096-1.04 0-.794-.995-1.29-1.637-1.554-.233-.096-.325-.237-.19-.526.331-.703.559-1.756.559-2.659 0-3.219-2.184-5.434-5.32-5.434z" />
  </svg>
);

export const SocialPlatformIcon: React.FC<{ id: string; className?: string }> = ({ id, className = "w-5 h-5" }) => {
  switch (id.toLowerCase()) {
    case 'facebook':
      return <FacebookIcon className={className} />;
    case 'youtube':
      return <YouTubeIcon className={className} />;
    case 'instagram':
      return <InstagramIcon className={className} />;
    case 'tiktok':
      return <TikTokIcon className={className} />;
    case 'snapchat':
      return <SnapchatIcon className={className} />;
    default:
      return <FacebookIcon className={className} />;
  }
};
