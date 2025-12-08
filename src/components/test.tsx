import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Test {
  id: string;
  title: string;
  description: string;
}

interface WriteTestsFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(100, 'Must be maximum of 100 characters')
      .required('Required'),
    description: Yup.string()
      .min(10, 'Must be at least 10 characters')
      .max(200, 'Must be maximum of 200 characters')
      .required('Required'),
  });

  const formik = useFormik<WriteTestsFormValues>({
    initialValues: { title: '', description: '' },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        // Simulate API call
        const newTest: Test = {
          id: Date.now().toString(),
          title: values.title,
          description: values.description,
        };
        setTests([...tests, newTest]);
      } catch (err) {
        setError('Failed to add test. Please try again.');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Write Tests</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange('title')}
              onBlur={formik.handleBlur('title')}
              className={`border-b-2 w-full p-3 ${formik.touched.title && formik.errors.title ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
            />
            {formik.touched.title && formik.errors.title ? (
              <div role="alert" aria-live="polite" className="text-red-500">{formik.errors.title}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange('description')}
              onBlur={formik.handleBlur('description')}
              className={`border-b-2 w-full p-3 ${formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
            />
            {formik.touched.description && formik.errors.description ? (
              <div role="alert" aria-live="polite" className="text-red-500">{formik.errors.description}</div>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 text-white bg-blue-600 rounded ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
          >
            {loading ? 'Loading...' : 'Add Test'}
          </button>
        </div>
      </form>

      <ul role="list" aria-label="Tests List">
        {tests.map((test) => (
          <li key={test.id} className="p-4 border-b flex justify-between items-center">
            <span>{test.title}</span>
            <span>({test.description.slice(0, 20)}...)</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Test {
  id: string;
  title: string;
  description: string;
}

interface WriteTestsFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(100, 'Must be maximum of 100 characters')
      .required('Required'),
    description: Yup.string()
      .min(10, 'Must be at least 10 characters')
      .max(200, 'Must be maximum of 200 characters')
      .required('Required'),
  });

  const formik = useFormik<WriteTestsFormValues>({
    initialValues: { title: '', description: '' },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        // Simulate API call
        const newTest: Test = {
          id: Date.now().toString(),
          title: values.title,
          description: values.description,
        };
        setTests([...tests, newTest]);
      } catch (err) {
        setError('Failed to add test. Please try again.');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Write Tests</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange('title')}
              onBlur={formik.handleBlur('title')}
              className={`border-b-2 w-full p-3 ${formik.touched.title && formik.errors.title ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
            />
            {formik.touched.title && formik.errors.title ? (
              <div role="alert" aria-live="polite" className="text-red-500">{formik.errors.title}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange('description')}
              onBlur={formik.handleBlur('description')}
              className={`border-b-2 w-full p-3 ${formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
            />
            {formik.touched.description && formik.errors.description ? (
              <div role="alert" aria-live="polite" className="text-red-500">{formik.errors.description}</div>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 text-white bg-blue-600 rounded ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
          >
            {loading ? 'Loading...' : 'Add Test'}
          </button>
        </div>
      </form>

      <ul role="list" aria-label="Tests List">
        {tests.map((test) => (
          <li key={test.id} className="p-4 border-b flex justify-between items-center">
            <span>{test.title}</span>
            <span>({test.description.slice(0, 20)}...)</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WriteTests;