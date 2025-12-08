import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<BusinessSpec>('https://api.example.com/business-spec')
      .then(response => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetching business specification failed:', error);
        setError('Failed to fetch the business specification.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const renderFeature = ({ id, title, details }: Feature) => (
    <div key={id} className={clsx('p-2 mb-2', isMobile ? 'bg-gray-100' : 'bg-white')}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm">{details}</p>
    </div>
  );

  return (
    <section aria-labelledby="business-spec-title" className={clsx('max-w-4xl mx-auto', isMobile ? 'px-2' : 'px-6')}>
      <h2 id="business-spec-title" className="text-xl font-bold mb-4">
        {businessSpec?.name}
      </h2>
      <p className="mb-4">{businessSpec?.description}</p>
      <div className={clsx('grid gap-4', isMobile ? 'grid-cols-1' : 'grid-cols-3')}>
        {businessSpec?.features.map(renderFeature)}
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<BusinessSpec>('https://api.example.com/business-spec')
      .then(response => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetching business specification failed:', error);
        setError('Failed to fetch the business specification.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const renderFeature = ({ id, title, details }: Feature) => (
    <div key={id} className={clsx('p-2 mb-2', isMobile ? 'bg-gray-100' : 'bg-white')}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm">{details}</p>
    </div>
  );

  return (
    <section aria-labelledby="business-spec-title" className={clsx('max-w-4xl mx-auto', isMobile ? 'px-2' : 'px-6')}>
      <h2 id="business-spec-title" className="text-xl font-bold mb-4">
        {businessSpec?.name}
      </h2>
      <p className="mb-4">{businessSpec?.description}</p>
      <div className={clsx('grid gap-4', isMobile ? 'grid-cols-1' : 'grid-cols-3')}>
        {businessSpec?.features.map(renderFeature)}
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;