import json

package_json_path = '../package.json'

# Read the current version from package.json
with open(package_json_path, 'r') as file:
    json_data = json.load(file)
    current_version = json_data['version']

# Split the current version into major, minor, and patch parts
major, minor, patch = map(int, current_version.split('.'))

# Increment the patch version (customize this logic as needed)
patch += 1

# Create the new version string
new_version = f'{major}.{minor}.{patch}'

# Update the version in package.json
json_data['version'] = new_version

# Write the updated package.json back to the file
with open(package_json_path, 'w') as file:
    json.dump(json_data, file, indent=2)

print(f'Updated the version in package.json to {new_version}')
