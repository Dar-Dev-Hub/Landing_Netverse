import React, { Component, ChangeEvent } from 'react';

export class ProfilePictureUpdate extends Component<
  { user: any },
  { selectedFile: File | null; progress: number | null; status: boolean | null }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedFile: null,
      progress: null,
      status: null
    };
  }

  handleSelectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      this.setState({
        selectedFile: event.target.files[0]
      });
    }
  };

  handleUpload = () => {
    if (this.state.selectedFile) {
      // Simulate the upload process
      const progress = 50;
      const status = true;
      this.setState({ progress, status });
    }
  };

  render() {
    return (
      <div className="container mx-auto" style={{ width: 'fit-content', margin: 'auto', paddingTop: '10%' }}>
        <div>
          <h3>Current Profile Picture</h3>
        </div>
        <div style={{ marginBottom: '50px' }}>
          {this.state.progress !== null ? (
            <div>Uploading {Math.floor(this.state.progress)}%</div>
          ) : (
            <img
              src={this.props.user.photoURL || 'https://react.semantic-ui.com/images/wireframe/image.png'}
              width="300px"
              alt="Profile"
            />
          )}
        </div>
        <small>
          {this.state.status !== null && (this.state.status ? 'Uploaded Successfully' : 'Upload failed')}
        </small>
        <div className="form-group file-upload-container">
          <div className="file-upload-label">
            <label htmlFor="profilePicTureInput">Upload A New Profile Picture</label>
            <input
              id="profilePicTureInput"
              className="form-control-file"
              type="file"
              accept="image/gif, image/jpeg, image/png"
              onChange={this.handleSelectedFile}
            />
          </div>
          
          <button
                  type="submit"
                  onClick={this.handleUpload}
                  aria-label="login with email and password"
                  className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                 Submit
                  
                </button>
        </div>
      </div>
    );
  }
}

export default ProfilePictureUpdate;