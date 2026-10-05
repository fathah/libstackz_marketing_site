'use client';

import React, { useState } from 'react';
import { ContactFormConfig } from '@/types/contact';
import { Button } from '@/components/ui/Button';
import { ContactField } from './ContactField';
import styles from './ContactForm.module.css';

export interface ContactFormProps {
  data: ContactFormConfig;
}

export function ContactForm({ data }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    subject: 'Choosing a plan',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <article className={styles.formCard} id="contact-form" aria-labelledby="form-heading">
      <div className={styles.header}>
        <h2 id="form-heading" className={styles.title}>
          {data.title}
        </h2>
        <p className={styles.description}>{data.description}</p>
      </div>

      {submitted ? (
        <div className={styles.successState} role="status" aria-live="polite">
          <div className={styles.successIcon} aria-hidden="true">✓</div>
          <h3 className={styles.successTitle}>Message sent successfully!</h3>
          <p className={styles.successText}>
            Thank you for reaching out. A member of our team will review your message and get back to you within one business day.
          </p>
          <Button
            type="button"
            variant="outline"
            className={styles.resetBtn}
            onClick={() => setSubmitted(false)}
          >
            Send another message
          </Button>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.grid}>
            {data.fields.map((field) => (
              <ContactField
                key={field.id}
                field={field}
                value={formData[field.name as keyof typeof formData] || ''}
                onChange={handleChange}
              />
            ))}
          </div>

          <div className={styles.submitRow}>
            <Button type="submit" size="default" className={styles.submitBtn}>
              {data.submitButton.label}
            </Button>
          </div>
        </form>
      )}
    </article>
  );
}
