import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirementsForm {
  title: string;
  description: string;
  targetAudience: string;
  contentTypes: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRequirementsForm>();

  const onSubmit: SubmitHandler<IRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      reset();
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="title" className={twMerge("block text-sm font-medium leading-6", errors.title ? "text-red-500" : "")}>Title</label>
        <input
          type="text"
          id="title"
          {...register('title', { required: 'This field is required' })}
          aria-invalid={errors.title ? true : false}
          className={twMerge("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", errors.title ? "focus:ring-red-500" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className={twMerge("block text-sm font-medium leading-6", errors.description ? "text-red-500" : "")}>Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'This field is required' })}
          aria-invalid={errors.description ? true : false}
          className={twMerge("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", errors.description ? "focus:ring-red-500" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="targetAudience" className={twMerge("block text-sm font-medium leading-6", errors.targetAudience ? "text-red-500" : "")}>Target Audience</label>
        <input
          type="text"
          id="targetAudience"
          {...register('targetAudience', { required: 'This field is required' })}
          aria-invalid={errors.targetAudience ? true : false}
          className={twMerge("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", errors.targetAudience ? "focus:ring-red-500" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contentTypes" className={twMerge("block text-sm font-medium leading-6", errors.contentTypes ? "text-red-500" : "")}>Content Types</label>
        <input
          type="text"
          id="contentTypes"
          {...register('contentTypes', { required: 'This field is required' })}
          aria-invalid={errors.contentTypes ? true : false}
          className={twMerge("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", errors.contentTypes ? "focus:ring-red-500" : "")}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={twMerge("inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500", loading ? "cursor-not-allowed opacity-70" : "")}
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirementsForm {
  title: string;
  description: string;
  targetAudience: string;
  contentTypes: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRequirementsForm>();

  const onSubmit: SubmitHandler<IRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      reset();
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="title" className={twMerge("block text-sm font-medium leading-6", errors.title ? "text-red-500" : "")}>Title</label>
        <input
          type="text"
          id="title"
          {...register('title', { required: 'This field is required' })}
          aria-invalid={errors.title ? true : false}
          className={twMerge("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", errors.title ? "focus:ring-red-500" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className={twMerge("block text-sm font-medium leading-6", errors.description ? "text-red-500" : "")}>Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'This field is required' })}
          aria-invalid={errors.description ? true : false}
          className={twMerge("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", errors.description ? "focus:ring-red-500" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="targetAudience" className={twMerge("block text-sm font-medium leading-6", errors.targetAudience ? "text-red-500" : "")}>Target Audience</label>
        <input
          type="text"
          id="targetAudience"
          {...register('targetAudience', { required: 'This field is required' })}
          aria-invalid={errors.targetAudience ? true : false}
          className={twMerge("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", errors.targetAudience ? "focus:ring-red-500" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contentTypes" className={twMerge("block text-sm font-medium leading-6", errors.contentTypes ? "text-red-500" : "")}>Content Types</label>
        <input
          type="text"
          id="contentTypes"
          {...register('contentTypes', { required: 'This field is required' })}
          aria-invalid={errors.contentTypes ? true : false}
          className={twMerge("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", errors.contentTypes ? "focus:ring-red-500" : "")}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={twMerge("inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500", loading ? "cursor-not-allowed opacity-70" : "")}
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;