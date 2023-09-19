export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Alternative Text',
        },
      ],
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'idx',
      title: 'Idx',
      type: 'number',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'popularproducts',
      title: 'PopularProducts',
      type: 'boolean',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'string',
    },
  ],
}
