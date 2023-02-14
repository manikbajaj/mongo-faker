import { SchemaDefinition, SchemaOptions } from 'mongoose';

export default  class MongooseFaker {
  private static schema: SchemaDefinition;
  private static options: SchemaOptions

  public static plugin(schema: SchemaDefinition, options: SchemaOptions) {
    // Set the schema once the plugin is instantiated
    MongooseFaker.schema = schema;
    // Set the options once the plugin is instantiated
    MongooseFaker.options = options;


    console.log('logging paths');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(schema.paths.email.options.fake);
    // console.log(options)
  }
}