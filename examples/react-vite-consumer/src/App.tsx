import { type FormEvent, type ChangeEvent, useState } from 'react';
import { Button, FormField, Input } from '@rgrmdesign/ds-components-react';

export function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emailIsValid = /\S+@\S+\.\S+/.test(email);
  const showError = submitted && !emailIsValid;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    if (!emailIsValid) return;
    window.alert(`Submitted: ${email}`);
  }

  function onEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return (
    <main className="consumer-shell">
      <section className="consumer-card">
        <h1>React Vite Consumer</h1>
        <p>
          This app simulates how a product outside this monorepo consumes the
          published design system packages.
        </p>

        <form onSubmit={onSubmit}>
          <FormField
            label="Email"
            required
            help={!showError ? 'Use your work email.' : undefined}
            error={showError ? 'Please enter a valid email address.' : undefined}
          >
            <Input
              type="email"
              value={email}
              placeholder="you@example.com"
              onChange={onEmailChange}
            />
          </FormField>

          <div className="actions">
            <Button type="submit">Submit</Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setEmail('');
                setSubmitted(false);
              }}
            >
              Reset
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
