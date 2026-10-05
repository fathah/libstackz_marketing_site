import React from 'react';
import { ContactFormConfig, ContactChannelsConfig, ContactLocationConfig } from '@/types/contact';
import { ContactForm } from './ContactForm';
import { ContactChannels } from './ContactChannels';
import { ContactLocation } from './ContactLocation';
import styles from './ContactWorkspace.module.css';

export interface ContactWorkspaceProps {
  form: ContactFormConfig;
  channels: ContactChannelsConfig;
  location: ContactLocationConfig;
}

export function ContactWorkspace({
  form,
  channels,
  location,
}: ContactWorkspaceProps) {
  return (
    <section className={styles.workspace} aria-label="Contact details and form">
      <div className={styles.workspaceInner}>
        <div className={styles.formCol}>
          <ContactForm data={form} />
        </div>
        <aside className={styles.sidebarCol} aria-label="Alternative contact channels and location">
          <ContactChannels data={channels} />
          <ContactLocation data={location} />
        </aside>
      </div>
    </section>
  );
}
