import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';
import { ContactChannelsConfig, ContactChannelItem } from '@/types/contact';
import styles from './ContactChannels.module.css';

export interface ContactChannelsProps {
  data: ContactChannelsConfig;
}

export function ContactChannels({ data }: ContactChannelsProps) {
  const renderChannelIcon = (type: ContactChannelItem['type']) => {
    switch (type) {
      case 'email':
        return <Mail size={16} strokeWidth={1.75} className={styles.icon} aria-hidden="true" />;
      case 'phone':
        return <Phone size={16} strokeWidth={1.75} className={styles.icon} aria-hidden="true" />;
      case 'url':
      default:
        return <Globe size={16} strokeWidth={1.75} className={styles.icon} aria-hidden="true" />;
    }
  };

  return (
    <article className={styles.card} aria-labelledby="channels-heading">
      <h3 id="channels-heading" className={styles.title}>
        {data.title}
      </h3>
      <div className={styles.channelsList}>
        {data.channels.map((channel) => (
          <div key={channel.id} className={styles.channelRow}>
            <div className={styles.iconWrap} aria-hidden="true">
              {renderChannelIcon(channel.type)}
            </div>
            <div className={styles.info}>
              <span className={styles.label}>{channel.label}</span>
              <a
                href={channel.href}
                className={styles.valueLink}
                target={channel.type === 'url' ? '_blank' : undefined}
                rel={channel.type === 'url' ? 'noopener noreferrer' : undefined}
              >
                {channel.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
