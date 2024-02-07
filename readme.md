# Block Styles Manager

This is an _in progress_ project to create a block styles manager for WordPress. The idea is to create a UI to manage block styles.

Follow along here: https://www.briancoords.com/build-in-public/

## Filters

### `block-styles-manager/location`

This filter allows you to change the location of the directory where CSS files are saved. By default, the directory is located in `/wp-content/block-styles`.

```php
add_filter( 'block-styles-manager/location', function( $location ) {
	return get_template_directory() . '/block-styles';
} );
```
