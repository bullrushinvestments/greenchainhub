import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'completed';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get('/api/requirements');
        setRequirements(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const handleRequirementChange = (id: string, status: Requirement['status']) => {
    axios.put(`/api/requirements/${id}`, { status })
      .then(response => {
        setRequirements(prevRequirements =>
          prevRequirements.map(requirement =>
            requirement.id === id ? { ...requirement, status } : requirement
          )
        );
      })
      .catch(err => setError('Failed to update requirement.'));
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-5">{error}</div>;

  return (
    <div>
      {requirements.map(requirement => (
        <div key={requirement.id} className="p-4 border rounded mb-2">
          <h3 className="font-bold">{requirement.name}</h3>
          <p>{requirement.description}</p>
          <button
            type="button"
            onClick={() => handleRequirementChange(requirement.id, requirement.status === 'pending' ? 'completed' : 'pending')}
            aria-label={`Mark ${requirement.name} as ${requirement.status === 'pending' ? 'completed' : 'pending'}`}
            className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
          >
            {requirement.status === 'pending' ? 'Complete' : 'Pending'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'completed';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get('/api/requirements');
        setRequirements(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const handleRequirementChange = (id: string, status: Requirement['status']) => {
    axios.put(`/api/requirements/${id}`, { status })
      .then(response => {
        setRequirements(prevRequirements =>
          prevRequirements.map(requirement =>
            requirement.id === id ? { ...requirement, status } : requirement
          )
        );
      })
      .catch(err => setError('Failed to update requirement.'));
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-5">{error}</div>;

  return (
    <div>
      {requirements.map(requirement => (
        <div key={requirement.id} className="p-4 border rounded mb-2">
          <h3 className="font-bold">{requirement.name}</h3>
          <p>{requirement.description}</p>
          <button
            type="button"
            onClick={() => handleRequirementChange(requirement.id, requirement.status === 'pending' ? 'completed' : 'pending')}
            aria-label={`Mark ${requirement.name} as ${requirement.status === 'pending' ? 'completed' : 'pending'}`}
            className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
          >
            {requirement.status === 'pending' ? 'Complete' : 'Pending'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;