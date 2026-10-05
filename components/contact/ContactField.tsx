import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ContactFormField } from '@/types/contact';
import styles from './ContactForm.module.css';

export interface ContactFieldProps {
  field: ContactFormField;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
}

export function ContactField({ field, value, onChange }: ContactFieldProps) {
  const isColSpan2 = field.colSpan === 2;
  const fieldWrapClasses = [
    styles.fieldGroup,
    isColSpan2 ? styles.colSpan2 : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (field.type === 'select') {
    return (
      <div className={fieldWrapClasses}>
        <label htmlFor={field.id} className={styles.label}>
          {field.label}
        </label>
        <div className={styles.selectWrapper}>
          <select
            id={field.id}
            name={field.name}
            value={value || field.defaultValue || ''}
            onChange={onChange}
            required={field.required}
            className={styles.select}
          >
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className={styles.selectChevron} aria-hidden="true">
            <ChevronDown size={14} strokeWidth={2} />
          </span>
        </div>
      </div>
    );
  }

  if (field.type === 'textarea') {
    return (
      <div className={fieldWrapClasses}>
        <label htmlFor={field.id} className={styles.label}>
          {field.label}
        </label>
        <textarea
          id={field.id}
          name={field.name}
          rows={field.rows || 5}
          placeholder={field.placeholder}
          value={value}
          onChange={onChange}
          required={field.required}
          className={styles.textarea}
        />
      </div>
    );
  }

  return (
    <div className={fieldWrapClasses}>
      <label htmlFor={field.id} className={styles.label}>
        {field.label}
      </label>
      <input
        id={field.id}
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        value={value}
        onChange={onChange}
        required={field.required}
        className={styles.input}
      />
    </div>
  );
}
