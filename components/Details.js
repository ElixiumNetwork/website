import React, { Component } from 'react'

class Details extends Component {
    render() {


        return (

            <main className="main-content">
                <header>
                    <div className="header-container">
                        <h1>Deploying An Elixium Full Node on DigitalOcean</h1>
                        <div>  4 min read</div>
                    </div>
                </header>
                <p>On November 30, 2018, we released the Elixium Testnet for public testing and experimentation. This post will guide all those who wish to run a full node on the network. Although this guide focuses on running the full node on DigitalOcean, much of this can be extended to use other hosting providers. </p>

                <h2>1. Create a new droplet</h2>
                <p>In order to run the full node, we’ll need a droplet where we can run the code. In the top menu bar of your DigitalOcean dashboard, click “Create” -> “Droplets”</p>
                <img src="https://miro.medium.com/max/2574/1*7QBt_NKD2naT7gKOGjbqGA.png" alt="medium" />
                <p>On the droplet creation screen, choose Ubuntu 18.04 as the droplet image. Choose any size for the droplet. At the time of writing, the Elixium Testnet chain size is only ~ 1.17 MB, so the smallest droplet (costing $5) that provides 25 GB worth of storage is plenty big for us.</p>
                <img src="https://miro.medium.com/max/2452/1*in3a-1dGjXALAd8aoE3Cqw.png" alt="medium" />
                <p>Choose whichever datacenter region is preferred, usually this is the one closest to you geospatially.</p>
                <p>Next, either select an existing SSH key to add to the droplet, or generate a new one and add it. This will be the SSH key that is used to connect to the droplet.</p>
                <p>The last step is to give your droplet a name, and then click “Create” to launch the droplet.</p>
                <img src="https://miro.medium.com/max/1670/1*1AGCnMpKfLxSH-X3W3GO5w.png" alt="medium" />
                <p>After clicking “Create”, DigitalOcean will spend a few minutes initializing the droplet. You should see the droplet listed in your dashboard:</p>
                <img src="https://miro.medium.com/max/2370/1*0vRA7N3hvmByiBPCZZcvvQ.png" alt="medium" />
                <p>After the droplet is initialized, you will have an option to copy it’s IP address, go ahead and copy it now.</p>
                <img src="https://miro.medium.com/max/2354/1*CkLqf5f2_TcexKBzaQb6cw.png" alt="medium" />



                <h3>2. SSH Into the Droplet</h3>
                <p>Now that we’ve initialized the droplet, let’s SSH into it and start setting up the node. Open a terminal window and type <code>{`ssh root@<droplet-ip>`}</code> . You’ll likely get a message that says:</p>
                <pre>
                    <code>
                        The authenticity of host '104.248.140.206 (104.248.140.206)' can't be established.
                        ECDSA key fingerprint is SHA256:hv7xK1ZkAaID27TTgMNNRNlfF+KB2SBrhL+Z8gyIRPQ.
                        Are you sure you want to continue connecting (yes/no)?
                   </code>
                </pre>
                <p>Type in “yes” and press enter.</p>


                <h3>3. Download the Latest Release</h3>
                <p>Open a new browser window and go to the latest release page. Right click on the ubuntu18.04 release and click “Copy link address”.</p>
                <img src="https://miro.medium.com/max/2880/1*eeODe0_WII-p3eV0ZuPUkg.png" alt="medium" />
                <p>Now, back in the DigitalOcean droplet, type <code>wget RELEASE_URL_HERE</code>. As of the time of writing, v1.0.0 is the latest release, so this command is:<code> wget https://github.com/ElixiumNetwork/elixium_node/releases/download/v1.0.0/elixium_node-ubuntu18.04.tar.gz</code></p>
                <p>This will download the latest release as a tarball to the DigitalOcean droplet. Now we need to unzip the release by running <code>mkdir elixium_node && tar -xvzf elixium_node-ubuntu18.04.tar.gz -C elixium_node</code></p>
                <h3>4. Synchronize the Chain</h3>
                <p>Now that we have the node downloaded and unzipped, cd into the node’s directory:<code> cd elixium_node</code> . Here, we can start the node by running</p>
                <p>After running the above command, you’ll see output that looks similar to</p>
                <img src="https://miro.medium.com/max/1036/1*andu7Aar6JsenN6wkTV_pA.gif" alt="medium" />
                <p>Once the block synchronization completes, you’ll want to press ctrl+c to kill the node.</p>


                <h3>5. Run the Node</h3>
                <p>At this point, our node’s chain should be synchronized with the rest of the network. We can start the node in the background as a daemon by running
                    <code> ./bin/elixium_node start </code>. For more configuration and usage options,<code> run ./bin/elixium_node usage </code>
                    , which will show how to run the node on a different port, how to enable rpc, etc.
                    Although the start option starts the daemon in the background,
             it’s possible to attach to the node’s output by running<code> ./bin/elixium_node attach </code>,
             but be careful because hitting ctrl+c while attached to the node will kill the node and you’ll need to run start again.</p>
                <p>In order to stop the node, run <code>./bin/elixium_node stop </code>.</p>

            </main>
        )
    }
}

export default Details
