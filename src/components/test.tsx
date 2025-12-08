import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

interface TestFormInputs {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/tests', data);
      router.push('/');
    } catch (err) {
      setError('An error occurred while saving the test.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Test Form">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            className={`w-full p-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
            aria-invalid={errors.title ? true : false}
          />
          <p role="alert" className="mt-1 text-sm text-red-600">{errors.title?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
            rows={5}
            className={`w-full p-2 border rounded ${errors.description ? 'border-red-500' : ''}`}
            aria-invalid={errors.description ? true : false}
          />
          <p role="alert" className="mt-1 text-sm text-red-600">{errors.description?.message}</p>
        </div>
        <button type="submit" disabled={loading} className={`w-full p-2 rounded ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold`}>
          {loading ? 'Loading...' : 'Save Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

interface TestFormInputs {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/tests', data);
      router.push('/');
    } catch (err) {
      setError('An error occurred while saving the test.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Test Form">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            className={`w-full p-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
            aria-invalid={errors.title ? true : false}
          />
          <p role="alert" className="mt-1 text-sm text-red-600">{errors.title?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
            rows={5}
            className={`w-full p-2 border rounded ${errors.description ? 'border-red-500' : ''}`}
            aria-invalid={errors.description ? true : false}
          />
          <p role="alert" className="mt-1 text-sm text-red-600">{errors.description?.message}</p>
        </div>
        <button type="submit" disabled={loading} className={`w-full p-2 rounded ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold`}>
          {loading ? 'Loading...' : 'Save Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;