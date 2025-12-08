import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('https://api.example.com/business-specifications/content')
      .then((response) => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load business specification.');
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner className="m-auto" />;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  const { id, name, description, requirements } = businessSpec!;

  return (
    <section className={clsx('bg-white p-6 rounded-lg shadow-md', 'max-w-screen-sm mx-auto')}>
      <h2 className="text-xl font-bold mb-4" aria-label={`Business Specification: ${name}`}>
        {name}
      </h2>
      <p className="mb-4" dangerouslySetInnerHTML={{ __html: description }} />
      <ul role="list">
        {requirements.map((req, index) => (
          <li key={index} className="mb-1" aria-label={`Requirement ${index + 1}: ${req}`}>
            {req}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('https://api.example.com/business-specifications/content')
      .then((response) => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load business specification.');
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner className="m-auto" />;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  const { id, name, description, requirements } = businessSpec!;

  return (
    <section className={clsx('bg-white p-6 rounded-lg shadow-md', 'max-w-screen-sm mx-auto')}>
      <h2 className="text-xl font-bold mb-4" aria-label={`Business Specification: ${name}`}>
        {name}
      </h2>
      <p className="mb-4" dangerouslySetInnerHTML={{ __html: description }} />
      <ul role="list">
        {requirements.map((req, index) => (
          <li key={index} className="mb-1" aria-label={`Requirement ${index + 1}: ${req}`}>
            {req}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CreateBusinessSpecification;